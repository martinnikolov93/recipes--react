import React from 'react';

import { isEmptyObject, getCookie } from '../../utils/helpers'

class AddRecipe extends React.Component {
    state = {
        title: '',
        titleErrors: false,
        url: '',
        urlErrors: false,
        description: '',
        descriptionErrors: false
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

        fetch('http://localhost:9999/api/recipe/', {
            method: 'POST',
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
            .then((json) => console.log(json))
    }

    changeHandlerTitle = (event) => {
        const title = event.target.value
        const titleErrors = this.titleValidator(title)
        this.setState({ title: event.target.value, titleErrors: titleErrors })
    }

    changeHandlerUrl= (event) => {
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
                        <input className={titleErrors ? "input-error" : ""} id='title' type="text" placeholder="Title" value={title} onChange={this.changeHandlerTitle} />
                        <div className="input-error-text">{titleErrors ? Object.values(titleErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='url'></label>
                        <input className={urlErrors ? "input-error" : ""} id='url' type="text" placeholder="URL" value={url} onChange={this.changeHandlerUrl} />
                        <div className="input-error-text">{urlErrors ? Object.values(urlErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='description'></label>
                        <input className={descriptionErrors ? "input-error" : ""} id='description' type="text" placeholder="Description" value={description} onChange={this.changeHandlerDescription} />
                        <div className="input-error-text">{descriptionErrors ? Object.values(descriptionErrors)[0] : null}</div>
                    </div>
                    <button>Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default AddRecipe