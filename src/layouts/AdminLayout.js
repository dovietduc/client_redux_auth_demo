import React from 'react';
import NavComponent from '../components/common/NavComponent';
import AsideComponent from '../components/common/AsideComponent';
import FooterComponent from '../components/common/FooterComponent';

function AdminLayout(props) {
    
    return (
        <div className="wrapper">

            <NavComponent/>
            <AsideComponent/>
                { props.children }
            <FooterComponent/>

        </div>
    );
}

export default AdminLayout;
