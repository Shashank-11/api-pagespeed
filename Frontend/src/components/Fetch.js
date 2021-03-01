const array1 = [
  "https://lagunatreatment.com/",
  "https://greenhousetreatment.com/",
  "https://www.rehabs.com/",
  "https://www.detox.net/",
  "https://heroin.net/",
  "https://treatmentsolutions.com/",
  "https://sdtreatmentcenter.com/",
  "https://drugabuse.com/usa/drug-abuse/alaska/",
  "https://www.projectknow.com/alcohol/",
  "https://www.alcohol.org",
];
async componentDidMount() {
    array1.forEach((element) => 
    axios
    .get(
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={element}&fields=lighthouseResult%2Fcategories%2F*%2Fscore&prettyPrint=false&strategy=mobile&category=performance&category=pwa&category=best-practices&category=accessibility&category=seo&key=AIzaSyC9nM8Br25HC5VTVQiRNokA2HJz-KKq_to"
    )
    .then((res) =>
      this.setState({
        scores: res.data,
        isLoaded: true,
      })
    )
    .catch((err) => console.log(err));
}
    );
    








// expected output: "a"
// expected output: "b"
// expected output: "c"
