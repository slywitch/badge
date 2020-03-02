import { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Animated
} from 'react-native'

export default class App extends Component {
  state={
    badgeScale: new Animated.Value(0),
    textValue: 0,
  }

  animateBadge(){
    this.state.badgeScale.setValue(0)
    const newTextValue = ++this.state.textValue
    this.setState({textValue:newTextValue})
    Animated.timing(this.state.badgeScale,{
      toValue: 1,
      duration: 500 }
    ).start()
  }

  componentDidMount () {
    this.animateBadge()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:100, height:100,backgroundColor:'red',borderRadius: 50}}></View>
        <Image style={{width:100, height:100,backgroundColor:'red',borderRadius: 50}}
          source={require('./rosto.jpg')}></Image>
        <Animated.View style={{width:40, height:40,backgroundColor:'black',borderRadius: 20,left: 0,top: 0,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'green',
          borderWidth: 1,
          position: 'absolute',
          transform: { scale: this.state.badgeScale }  }}>
          <Text style={{backgroundColor: 'black',color: 'white' }}>
            {this.state.textValue}
          </Text>
        </Animated.View>
        <Button title='Adicionar' onPress={() => this.animateBadge}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',    
  },
})