import React from 'react';
import { withRouter } from 'react-router-dom';
import { isEmptyObject, getCookie } from '../../utils/helpers'
import dbRoutes from '../../utils/db-routes';
import styles from './EditRecipe.module.css'
import UserContext from '../../Context';

class EditRecipe extends React.Component {
    state = {
        title: '',
        titleErrors: false,
        url: '',
        urlErrors: false,
        description: '',
        descriptionErrors: false
    }

    componentDidMount() {
        fetch(dbRoutes.getRecipeByID(this.props.match.params.id))
            .then((response) => response.json())
            .then((recipe) => {

                if (recipe.author._id !== this.context.user._id) {
                    return this.props.history.push('/')
                }

                this.setState({
                    title: recipe.title,
                    url: recipe.url,
                    description: recipe.description
                })
                document.title = 'Editing - ' + recipe.title + ' | Recipes'
            })
            .catch((err) => console.log(err))
    }

    titleValidator = (title) => {
        let titleErrors = {}

        if (!title) {
            titleErrors.required = 'Title is required.';
        }

        if (isEmptyObject(titleErrors)) {
            return false
        }

        return titleErrors
    }

    urlValidator = (url) => {
        let urlErrors = {}

        if (!url) {
            urlErrors.required = 'URL is required.';
        }

        if (isEmptyObject(urlErrors)) {
            return false
        }

        return urlErrors
    }

    descriptionValidator = (description) => {
        let descriptionErrors = {}

        if (!description) {
            descriptionErrors.required = 'Description is required.';
        }

        if (isEmptyObject(descriptionErrors)) {
            return false
        }

        return descriptionErrors
    }

    submitHandler = (event) => {
        event.preventDefault()

        let { title, url, description } = this.state

        const titleErrors = this.titleValidator(title)
        const urlErrors = this.urlValidator(url)
        const descriptionErrors = this.descriptionValidator(description)

        this.setState({ titleErrors, urlErrors, descriptionErrors })

        if (titleErrors || urlErrors || descriptionErrors) {
            return
        }

        fetch(dbRoutes.putRecipe(this.props.match.params.id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                url,
                description,
                token: getCookie('auth-token')
            })
        })
            .then((response) => {
                const recipe = response.json()
                return recipe
            })
            .then((json) => this.props.history.push(`/recipe/view/${this.props.match.params.id}`))
            .catch((err) => console.log(err))
    }

    changeHandlerTitle = (event) => {
        const title = event.target.value
        const titleErrors = this.titleValidator(title)
        this.setState({ title: event.target.value, titleErrors: titleErrors })
    }

    changeHandlerUrl = (event) => {
        const url = event.target.value
        const urlErrors = this.urlValidator(url)
        this.setState({ url: url, urlErrors: urlErrors })
    }


    changeHandlerDescription = (event) => {
        const description = event.target.value
        const descriptionErrors = this.descriptionValidator(description)
        this.setState({ description: description, descriptionErrors: descriptionErrors })
    }

    render() {
        let { title, titleErrors, url, urlErrors, description, descriptionErrors } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='title'></label>
                        <input className={styles['recipe-input'] + ' ' + (titleErrors ? "input-error" : "")} id='title' type="text" placeholder="Title" value={title} onChange={this.changeHandlerTitle} />
                        <div className="input-error-text">{titleErrors ? Object.values(titleErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='url'></label>
                        <input className={styles['recipe-input'] + ' ' + (urlErrors ? "input-error" : "")} id='url' type="text" placeholder="URL" value={url} onChange={this.changeHandlerUrl} />
                        <div className="input-error-text">{urlErrors ? Object.values(urlErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='description'></label>
                        <textarea rows="20" className={styles['recipe-input'] + ' ' + (descriptionErrors ? "input-error" : "")} id='description' type="text" placeholder="Description" defaultValue={description} onChange={this.changeHandlerDescription}>
                        </textarea>
                        <div className="input-error-text">{descriptionErrors ? Object.values(descriptionErrors)[0] : null}</div>
                    </div>
                    <button>Edit Recipe</button>
                </form>
            </div>
        )
    }
}

EditRecipe.contextType = UserContext

export default withRouter(EditRecipe)