import React, { Component } from "react";
import {
  Container,
  Table,
  Spinner,
  Dropdown,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import {} from "react-bootstrap";
import "../components/Score.css";
import "./Search.css";

const postData = async (payload) => {
	const response = await fetch("http://localhost:8000/api/score", {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

const fetchUrls = async () => {
	try {
		const response = await fetch("http://localhost:8000/api");
		return response.json()
	}
	catch(error){
		return error
	}

}

const fetchUrl = async (url, date) => {
	try {
		const response = await fetch(`http://localhost:8000/api/score?url=${url}&date=${date}`);
		return response.json()
	}
	catch(error){
		return error
	}
}

export class Score extends Component {
  state = {
    scores: [],
		isLoaded: true,
		uploadUrl: "",
		urls:[],
		selectedUrl: 'Select the URL for more details.'
  };


	 uploadUrl (e,url) {
		 e.preventDefault();
		 const payload ={
			 url: url
		 }
		 this.setState({
			...this.state,
			isLoaded: false
		})
		postData(payload)
		.then(() => {
			fetchUrls().then(responseData=>{
			const fetchedUrls =	responseData.map((data) => {	
				return {url:data.url, date: data.date}
			})
			this.setState({
				...this.state,
				urls: fetchedUrls,
				isLoaded: true
			})}).catch((error) => {
				console.log(error)
				this.setState({
					...this.state,
					isLoaded: true
				})
			})
		});
	}
	

	onTextChange (e) {
		this.setState({ ...this.state ,uploadUrl: e.target.value});
	}

	onUrlSelect(e, itemUrl, itemDate){
		e.preventDefault()
		this.setState({...this.state, selectedUrl: `${itemUrl} , ${itemDate}`, isLoaded: false})
		fetchUrl(itemUrl, itemDate).then(responseData=>{
			this.setState({ ...this.state ,scores: responseData[0].score, isLoaded: true });
		}).catch((error) => {
			console.log(error)
			this.setState({
				...this.state,
				isLoaded: true
			})
		})
	}

  render() {
		const { scores, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <div>
						<input type="text" onChange={(e)=>this.onTextChange(e)}/>
						<Button onClick={(e)=>this.uploadUrl(e, this.state.uploadUrl)} variant='success' className='upload-btn'>
                  Upload url
            </Button>
            <Row className='mt-4 mb-4'>
              <Col className='dropdown pr-0' style={{ display: "inline" }}>
							<Dropdown >
                  <Dropdown.Toggle
                    variant='outline-dark btn-sm'
                    id='dropdown-basic'>
											{this.state.selectedUrl}
                    
                  </Dropdown.Toggle>

                  <Dropdown.Menu  style={{ backgroundColor: "#73a47" }}>
										{this.state.urls && this.state.urls.map((item, key) =>{
 											return	<Dropdown.Item onClick={(e)=>this.onUrlSelect(e, item.url , item.date)} key ={key} href='#'>{item.url} , {item.date}</Dropdown.Item>
										})
										}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Container className='p-0'>
              <Table
                striped
                responsive
                bordered
                hover
                variant='dark'
                className='score'>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Performance</th>
                    <th>Accessibility</th>
                    <th>Best practices</th>
                    <th>SEO</th>
                    <th>PWA</th>
                    <th>Fetch Time</th>
                  </tr>
                </thead>
                <tbody>
                  {scores?.lighthouseResult && (
                    <tr>
                      <td >Dynamic URL</td>
                      <td >
                        {scores?.lighthouseResult?.categories?.performance?.score * 100}
                      </td>
                      <td >
                        {scores?.lighthouseResult?.categories?.accessibility?.score *
                          100}
                      </td>
                      <td >
                        {scores?.lighthouseResult?.categories["best-practices"]?.score *
                          100}
                      </td>
                      <td >
                        {scores?.lighthouseResult?.categories?.seo?.score * 100}
                      </td>
                      <td >
                        {scores?.lighthouseResult?.categories?.pwa?.score * 100}
                      </td>
                      <td >Dynamic Date</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Container>
          </div>
        </>
      );
    }
    return (
      <div className='text-center loading'>
        <Container>
          <Spinner animation='border' />
          <p>Fetching Data Please wait...</p>
        </Container>
      </div>
    );
  }
}

export default Score;
