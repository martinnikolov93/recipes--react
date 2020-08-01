import React from 'react'
import PageLayout from '../../components/page-layout/PageLayout';
import Profile from '../../components/profile/Profile';

class ProfilePage extends React.Component {
    render() {
        return (
            <PageLayout>
                <h2>Profile</h2>
                <Profile />
            </PageLayout>
        )
    }
}

export default ProfilePage