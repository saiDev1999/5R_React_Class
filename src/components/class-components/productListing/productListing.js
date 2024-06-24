import axios from "axios";
import CustomSpinner from "../../customSpinner/customSpinner";

const { Component } = require("react");

class ProductListing extends Component {
  // state = {
  //   productListing: [],
  //   loading: false,
  //   error: null,
  //   additional: {
  //     one: "one",
  //   },
  // };

  constructor() {
    super();
    this.state = {
      productListing: [],
      loading: false,
      error: null,
      additional: {
        one: "one",
      },
    };
  }

  componentDidMount() {
    console.log("componentDidMount invoked...");
    document.title = "my project";
    // this.fetchData();
  }

  //   fetchData = () => {
  //     this.setState({
  //       loading: true,
  //     });

  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         this.setState({
  //           productListing: response,
  //           loading: false,
  //         });
  //       });
  //   };

  //   fetchData = async () => {
  //     this.setState({
  //       loading: true,
  //     });
  //     try {
  //       const response1 = await fetch("https://fakestoreapi.com/products");
  //       const finalResponse = await response1.json();
  //       this.setState({
  //         productListing: finalResponse,
  //         loading: false,
  //       });
  //     } catch (err) {
  //       console.error(err);
  //       this.setState({
  //         error: "Server is busy",
  //       });
  //     } finally {
  //       this.setState({
  //         loading: false,
  //       });
  //     }
  //   };

  fetchData = async () => {
    this.setState({
      loading: true,
    });
    try {
      const response1 = await axios.get("https://fakestoreapi.com/products");
      console.log(response1, "response1");

      if (response1.status === 200) {
        this.setState({
          productListing: response1.data,
          loading: false,
        });
      }
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Server is busy",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const {
      loading,
      productListing,
      additional: { one },
    } = this.state;
    console.log("render invoked...");
    return (
      <>
        <h3>Product Listing page</h3>

        {loading ? (
          <>
            <h3>Please wait ....</h3>
            <CustomSpinner />
          </>
        ) : (
          <div>
            {productListing.map((eachObject) => {
              return <h3 key={eachObject.id}>{eachObject.title}</h3>;
            })}
          </div>
        )}
      </>
    );
  }
}

export default ProductListing;
