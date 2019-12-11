import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,StyleSheet,Image,TouchableHighlight} from 'react-native';
import {Card, CardSection, Input, Button, ProgressBar} from "./common";
import {onRfrshCall, sampleApiCall} from '../actions'
import {connect} from 'react-redux';
//import {Movie1} from "../business/common/realmDB/Realm";
import ImageSlider from 'react-native-image-slider';


class ReduxSample extends Component {

  
   componentDidMount(){
        debugger;
       this.props.sampleApiCall({});
    }

 

    render() {
        debugger;
var data = this.props.originList;
        return (

            <View style={styles.container}>
            <View style={styles.content1}>
                <TouchableOpacity style = {styles.rfrsBtn}
                onPress = {()=>{
                    alert("click")
                    this.props.sampleApiCall({});
                }}
                >
                <Image
          style={{width: 20, height: 20}}
          source={require('../imgs/reload.png')}/>
                </TouchableOpacity>
            </View>
            {this.props.originList.length !=0 && !this.props.loading ?<ImageSlider
              loop
              autoPlayWithInterval={3000}
              images={this.props.originList}
              onPress={({ index }) => alert(index)}
              customSlide={({ index, item, style, width }) => (
                // It's important to put style here because it's got offset inside
                <View
                  key={index}
                  style={[
                    style,
                    styles.customSlide,
                    { backgroundColor: "black" },
                  ]}
                >
                    
                    <Text style = {{color:'#fff',fontSize:15,fontWeight:'bold',padding:10}
    }>{item.author}</Text>
                  <Image source={{ uri: "https://picsum.photos/200/300?image="+item.id }} style={styles.customImage} />
                </View>
              )}
              customButtons={(position, move) => (
                <View style={styles.buttons}>
                  {this.props.originList.map((image, index) => {
                    return (
<TouchableHighlight
                        key={index}
                        underlayColor="#ddd"
                        onPress={() => move(index)}
                        style={styles.button}
                      >
                         <View style = {[styles.buttonNoSelect,position === index && styles.buttonSelected]}>
    
    </View> 
                        
                      </TouchableHighlight>
                      
                    );
                  })}
                </View>
              )}
            />:<Text>Loading...</Text>}
            <View style={styles.content2}>
            </View>
          </View>
            )
        }
    


    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    slider: { backgroundColor: '#000', height: 350 },
    content1: {
      width: '100%',
      height: 50,
      marginBottom: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content2: {
      width: '100%',
      height: 100,
      marginTop: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText: { color: '#fff' },
    buttons: {
      zIndex: 1,
      height: 15,
      marginTop: -25,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    button: {
      margin: 3,
      width: 15,
      height: 15,
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonSelected: {
      opacity: 1,
      backgroundColor: 'white',
      width:12,height:12,borderRadius:50,borderWidth:1,borderColor:'white'
    },
    customSlide: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customImage: {
      width:200,
      height:300
    },
    buttonNoSelect:{backgroundColor:'#ddd', width:10,height:10,borderRadius:50,borderWidth:1,borderColor:'#ccc'},
    rfrsBtn:{width:30,height:30,borderRadius:50,borderWidth:1,borderColor:'#000',backgroundColor:'#000',alignSelf:'flex-end'}
  });

const mapStateToProps = ({auth}) => {
    debugger;
   // email:auth.state.email;
    const {originList,loading} = auth;
    debugger
    return {originList,loading};
}

export default connect(mapStateToProps, {
   
    sampleApiCall,onRfrshCall
})(ReduxSample);