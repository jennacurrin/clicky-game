import React from 'react';
import './App.css';




// Components
class App extends React.Component {

  state = {
    score: 0,
    userAlreadyImages: [],
    images: [
      { url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', id: 1 },
      { url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg', id: 2 },
      { url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 3 },
      { url: 'https://dcist.com/wp-content/uploads/sites/3/2019/04/Gem2-1500x1346.jpg', id: 4 },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvy8WkC-Ynu8jN-3U3VLhHYbzyKE8Q1Bx7v1SFmOuytRNdrxQM&s', id: 5 }
    ]
  }

  increment = (id) => {
    this.shuffleArray(this.state.images);

    if (this.state.userAlreadyImages.includes(id)) {
      // If then reset the user score
      console.log('Dude, seriously, this is second time!!');
      this.setState({
        score: 0
      });
    } else {
      this.setState({
        userAlreadyImages: this.state.userAlreadyImages.concat(id)
      });
      
      this.setState({
        score: this.state.score + 1
      });
    }

  }

  shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
  }

  render() {
    console.log('User Selector: ', this.state.userAlreadyImages);
    // Refactor data structure

    // image.id
  
    // JSX
    return (
  
      <div className="hello">
        <h1>Click on a Cat!</h1>
        { this.state.images.map((image) => (
          <img src={image.url} alt="" style={{ margin: '10px' }} onClick={() => this.increment(image.id)}/>
        )) }

        <p>Score: {this.state.score}</p>
  
      </div>
    );
  }
}



export default App;
