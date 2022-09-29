import React from 'react';

const Question = () => {
    return (
        <div>
            <section className="container my-5">
                <div className="d-flex flex-column align align-items-center my-5">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p>How dose React Work</p>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>ReactJs</strong> divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering the code.</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p>What are the difference between Props and State</p>
    
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Props and State:</strong> <br />
                            1.Props are read-only. State changes can be asynchronous. <br />
                            2.Props are immutable. State is mutable. <br />
                            3.Props can be accessed by the child component.	State cannot be accessed by child components. <br />
                            4.Stateless component can have Props. Stateless components cannot have State.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p>Uses of useEffect expect data loading</p>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>1. Validating input field. <br />
                            2. Live filtering <br />
                            3. Trigger animation on new array value
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    </div>
  
          </section>
        </div>
    );
};

export default Question;