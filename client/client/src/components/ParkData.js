import React from 'react';

class ParkData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ParkDataArray: []
        }
    }

    getParkData = async () => {
        let parkCode = "ACAD"
        console.log("get park data fired")
        let response = await fetch('http://127.0.0.1:4000/api/posts')
            //`https://developer.nps.gov/api/v1/newsreleases?parkCode=${parkCode}&api_key=Qljuiw8TZtWshEnVSv9ty3miWNXmxogbDyFkSSDZ`);
        let data = await response.json()
        
        return data
    }

    render() {

        return (
            <div className='ParkData'>
                {this.state.ParkDataArray.map((item) => {
                    
                    return <div key={item.id} id={item.id}>
                        
                        {JSON.stringify(item)}
                        <h1>{item.title}</h1>
                        <p>{item.abstract}</p>
                        <img src={item.image.url}></img>
                        </div>

                    }
                
                )}
            </div>
        )

    }

    componentDidMount() {
        console.log("Mounted!")
        this.getParkData()
            .then((data) => {
                this.setState({
                    ParkDataArray: data.data  
                })
                
            })
    }
    


}

export default ParkData;