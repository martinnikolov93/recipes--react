import React from 'react';
import styles from './CategoriesDropdown.module.css'
import { NavLink } from 'react-router-dom';

class CategoriesDropdown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            isHovering: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/api/category/')
            .then((response) => response.json())
            .then((categories) => {
                this.setState({ categories })
            })
            .catch((err) => console.log(err))
    }

    handleMouseEnter = () => {
        this.setState({ isHovering: true })
    }

    handleMouseLeave = () => {
        this.setState({ isHovering: false })
    }

    render() {
        return (
            <>
                <span

                >
                    <NavLink to='/categories' activeClassName={styles['nav-button-active']}
                        className={this.props.className}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}>
                        Categories
                    </NavLink>
                </span>
                {
                    this.state.isHovering &&
                    <span onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={styles['categories-box']}>
                        {this.state.categories.map((category, i) => {
                            return (
                                <div key={i}>
                                    {i === 0 ? null : <hr />}
                                    <NavLink className={styles['category-link']} to={`/categories/${category.title}`} activeClassName={styles['nav-button-active']}>
                                        {category.title}
                                    </NavLink>
                                </div>
                            )
                        })}
                    </span>
                }
            </>
        )
    }
}

export default CategoriesDropdown