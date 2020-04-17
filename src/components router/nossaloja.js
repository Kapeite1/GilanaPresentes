import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map () {
    return (
        <GoogleMap defaultZoom={16} defaultCenter={{lat: -22.4784114, lng: -42.2029078}}/>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function NossaLoja() {
    return (
        <div>
            <Header />
            <Navigator />
            <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style= {{height: '100%'}} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
            <Footer />
            <Copyright />
        </div>
    )
}

export default NossaLoja;