import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import SliderComponent from './components/SliderComponent';



const RouterComponent = () => {

    return (
        //initial is to show the initial screen on scene

        //Grouping this because of not showing the back button
        //sceneStyle={{paddingTop: 65,}}
        <Router
            navigationBarStyle={{ backgroundColor: '#669966' ,elevation:10}}
            titleStyle={{
                fontFamily: 'Pacifico-Regular',
                fontSize: 22,
                color: '#fff',
            }}
            navBarButtonColor={{ color: '#fff' }}


        >
            <Scene key="root"
                   backButtonImage={require('./imgs/back.png')}
                //backButtonImage={{tintColor:'#ffffff'}}
            >
                
                <Scene key="SliderComponent" component={SliderComponent} title="SliderComponent" hideNavBar initial/>
            </Scene>
        </Router>

    );

};

export default RouterComponent;
/*renderBackButton={() =>
<LeftButton
    leftButtonIcon={"arrow-back"}
    onLeft={() => Actions.pop()}
    leftButtonColor={"white"}
    leftButtonIconSize={30}
/>
}*/