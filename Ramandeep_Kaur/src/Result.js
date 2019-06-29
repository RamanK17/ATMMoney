import React from 'react';
class Result extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h4>You will get following amount</h4>
                <div className="result">{
                    Object.keys(this.props.denom_count).map(denom_key=>{
                        return <p key={denom_key} className="notes"> 
                        { this.props.denom_count[denom_key]} notes of Rs {denom_key}
                    </p>
                    })
                }
                </div>
                <h5 className="totalNotes">Total notes dispensed: {this.props.totalCount}</h5>
            </div>
        );
    }   
}
export default Result;