import React, { Component } from "react";
import Swiper from "react-native-deck-swiper"; // Version can be specified in package.json
import { StyleSheet, View, Text, Image, Button } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ["Person One", "Person Two", "Person Three"],
      swipedAllCards: false,
      swipeDirection: "",
      verticalSwipe: false,
      isSwipingBack: false,
      cardIndex: 0,
      matches: {}
    };
  }

  renderCard = card => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card}</Text>
      </View>
    );
  };
 
 disableTopSwipe: true;
 disableBottomSwipe: true;
 
  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
    //NAVIGATE TO MATCHES PAGE
  };
  
  onSwipedLeft = (cardIndex) => {
    this.matches.push(cardIndex),
    console.log("card" + this.cardIndex);
    //SAVE TO MATCHES PAGE
  };


  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };


  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    );
  };

  jumpTo = () => {
    this.swiper.jumpToCardIndex(2);
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.swiper}
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={this.onSwiped}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          onSwipedLeft={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          showSecondCard={false}
          overlayLabels={{
            left: {
              title: 'DECLINE',
              swipeColor: '#FF6C6C',
              backgroundOpacity: '0.95',
              fontColor: '#FFF'
            },
           right: {
              title: 'ACCEPT',
              swipeColor: '#4CCC93',
              backgroundOpacity: '0.95',
              fontColor: '#FFF'
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
         backgroundColor={'#ffe6e6'}> 
        
          <Button onPress={this.swipeBack}
            color = "#ad2b2c"
            title="Swipe Back" />
          <Button onPress={this.jumpTo}
            color = "#ad2b2c"
            title="Jump to last index" />
        </Swiper>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25, 
    flex: 1,
    backgroundColor: "#FDEDEC",
  },
  swiper: {
    paddingTop: 20, 
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#FDEDEC",
    justifyContent: "center",
    backgroundColor: "#E8DAEF"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },

});

export default Deck;