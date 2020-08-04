import React from 'react';

import { withRouter } from 'react-router-dom';

import { isEmptyObject, getCookie } from '../../utils/helpers'
import dbRoutes from '../../utils/db-routes';

import styles from './AddRecipe.module.css'


class AddRecipe extends React.Component {
    state = {
        title: '',
        titleErrors: false,
        url: '',
        urlErrors: false,
        categoryId: '',
        categoryErrors: false,
        description: '',
        descriptionErrors: false,
        categories: [],
    }

    componentDidMount() {
        fetch('http://localhost:9999/api/category')
            .then((response) => response.json())
            .then((categories) => {
                this.setState({ categories })
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

    categoryValidator = (category) => {
        let categoryErrors = {}

        if (!category) {
            categoryErrors.required = 'Category is required.';
        }

        if (isEmptyObject(categoryErrors)) {
            return false
        }

        return categoryErrors
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

        let { title, url, categoryId, description } = this.state

        const titleErrors = this.titleValidator(title)
        const urlErrors = this.urlValidator(url)
        const categoryErrors = this.categoryValidator(categoryId)
        const descriptionErrors = this.descriptionValidator(description)

        this.setState({ titleErrors, urlErrors, categoryErrors, descriptionErrors })

        if (titleErrors || urlErrors || categoryErrors || descriptionErrors) {
            return
        }

        fetch(dbRoutes.postRecipe, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                url,
                categoryId,
                description,
                token: getCookie('auth-token')
            })
        })
            .then((response) => {
                const recipe = response.json()
                return recipe
            })
            .then((json) => this.props.history.push(`/recipe/view/${json._id}`))
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

    changeHandlerCategories = (event) => {
        const categoryId = event.target.value
        const categoryErrors = this.categoryValidator(categoryId)
        this.setState({categoryId, categoryErrors})
    }

    changeHandlerDescription = (event) => {
        const description = event.target.value
        const descriptionErrors = this.descriptionValidator(description)
        this.setState({ description: description, descriptionErrors: descriptionErrors })
    }

    render() {
        let { title, titleErrors, url, urlErrors, categoryErrors, description, descriptionErrors } = this.state

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
                        <input className={styles['recipe-input'] + ' ' + (urlErrors ? "input-error" : "")} id='url' type="text" placeholder="Image URL" value={url} onChange={this.changeHandlerUrl} />
                        <div className="input-error-text">{urlErrors ? Object.values(urlErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='categories'></label>
                        <select id='categories' className={styles['recipe-input'] + ' ' + styles['recipe-select'] + ' ' + (categoryErrors ? "input-error" : "")} onChange={this.changeHandlerCategories}>
                            <option value=''>Select Category</option>
                            {this.state.categories.map((category, i) => {
                                return <option key={i} value={category._id}>{category.title}</option>
                            })}
                        </select>
                        <div className="input-error-text">{categoryErrors ? Object.values(categoryErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='description'></label>
                        <textarea rows="20" className={styles['recipe-input'] + ' ' + (descriptionErrors ? "input-error" : "")} id='description' type="text" placeholder="Description" defaultValue={description} onChange={this.changeHandlerDescription}>
                        </textarea>
                        <div className="input-error-text">{descriptionErrors ? Object.values(descriptionErrors)[0] : null}</div>
                    </div>
                    <button>Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AddRecipe)