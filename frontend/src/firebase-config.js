export default {
    apiKey: "AIzaSyAkAyFuyYxYDEk_AKy0qjGj2-FDjctstEU",
    authDomain: "whyamiaclevelandfan.firebaseapp.com",
    databaseURL: "https://whyamiaclevelandfan.firebaseio.com",
    projectId: "whyamiaclevelandfan",
    storageBucket: "whyamiaclevelandfan.appspot.com",
    messagingSenderId: "973634747639",
    appId: "1:973634747639:web:61578ba9d09259894fe7f2",
    measurementId: "G-HDQLSF1Y2W"
  }

// class AddPost extends Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   state = {
//     title: ''
//   };

//   handleChange = (e) => {
//     this.setState({
//       title: e.target.value
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.firebaseRef.push({
//       title: this.state.title
//     });

//     this.setState({
//       title: ''
//     });
//   }

//   render() {
//     return (
//       <div className="AddPost">
//         <input
//           type="text"
//           placeholder="Write the title of your post"
//           onChange={ this.handleChange }
//           value={ this.state.title }
//         />
//         <button
//           type="submit"
//           onClick={ this.handleSubmit }
//         >
//           Submit
//         </button>
//       </div>
//     );
//   }
// }
