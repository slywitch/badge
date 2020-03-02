import React, { Component } from "react"
import {
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
        <View style={styles.espacamento}>
          <View>
            <Image style={styles.fundoImagem} source={require('./cart.png')}></Image>
            <Animated.View style={styles.animacao}>
              <Text style={styles.texto}>{this.state.textValue}</Text> 
            </Animated.View>
          </View>
        </View>
        <Button title='Adicionar' onPress={() => this.animateBadge()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',    
  },
  espacamento: {
    padding: 40/2,
  },
  fundoImagem: {
    width:100,
    height:100,
    backgroundColor:'white',
    borderRadius: 50,
  },
  animacao: {
    position: 'absolute',
    width:40,
    height:40,
    borderRadius: 20,
    backgroundColor:'red', 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    left: 90-40/2,top: 0,
    // transform: [{scale: this.state.badgeScale}],
  },
  texto: {
    backgroundColor: 'transparent',
    color: 'white', 
  },
})