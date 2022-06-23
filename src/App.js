import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // var name="Dr.Mahafuz";
    // var nameTwo={
    //   name:"Dr.Mahafuz",
    //   job:"singer"
    // }
    // var nameTree={
    //   name:"Eva Rahiman",
    //   job:"singer"
    // }
    // var style={
    //   color:"red",
    //   backgroundColor:'yellow'

    const Nyok = ['dipjol', 'Manna', 'salman Sha', 'khairul'];

    const prodects = [{
            name: "Photoshop",
            price: "$99.0"
        },
        {
            name: "Illustrator",
            price: "$56.99"
        },
        {
            name: "Smart Tv",
            price: "$80.00"
        },
        {
            name: "Smart Tv",
            price: "$80.00"
        },
        {
            name: "Smart Tv",
            price: "$80.00"
        },
        {
            name: "Smart Tv",
            price: "$80.00"
        }
    ];



    return (

            //   <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     // <p>
            //   //       Edit done<code>src/App.js</code> and save to reload.
            //   //     </p>
            //   //     <h1 className='' style={style}>my heading: {nameTwo.name+" "+nameTwo.job}</h1>
            //   //     <h3 style={{backgroundColor:'cyan',color:'yellow'}}>singer:{nameTree.name+" "+nameTree.job}</h3>
            //   //     <p>My frist react peragraph</p>
            //   </header>
            // </div>

            <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            Users > < /Users> <
            Count > < /Count> <
            ul > {
                Nyok.map(Nyok => < li > { Nyok } < /li>)
                } <
                /ul> {
                    prodects.map(p => < li > { p.name } < /li>)
                    } {
                        prodects.map(x => < Prodect prodect = { x } > < /Prodect>)
                        }

                        <
                        Person name = { Nyok[0] }
                        nickname = 'reza' > < /Person> <
                            Person name = { Nyok[1] }
                        nickname = 'Mita' > < /Person> <
                            Person name = { Nyok[2] }
                        nickname = 'Boss' > < /Person> <
                            Person name = { Nyok[3] }
                        nickname = 'chotto vai' > < /Person>

                        <
                        /header> <
                        /div>
                    );
                }

                function Users() {
                    const [users, setUsers] = useState([]);
                    useEffect(() => {
                        fetch(`https://jsonplaceholder.typicode.com/users`)
                            .then(res => res.json())
                            .then(data => {
                                setUsers(data);
                            }, [])

                    });
                    return ( <
                        div >
                        <
                        h3 > Dynamic fetch: { users.length } < /h3> <
                        ul >

                        {
                            users.map(x => < div > < li > { x.name } < /li> <
                                p > { x.phone } < /p> <
                                p > { x.email } < /p>


                                <
                                /div>)
                            }

                            <
                            /ul>

                            <
                            /div>
                        )
                    }

                    function Count() {
                        const [count, setcount] = useState(0);
                        // const handleClick= () => setcount(count+1);
                        return ( <
                            div >
                            <
                            h1 > Count: { count } < /h1> <
                            button onMouseMove = {
                                () => setcount(count + 1) } > Increase < /button> <
                            button onClick = {
                                () => setcount(count - 1) } > Dcrease < /button> <
                            /div>
                        )
                    }

                    function Prodect(props) {
                        const { name, price } = props.prodect;
                        const style1 = {
                            height: "200px",
                            width: "200px",
                            border: "2px solid cyan",
                            backgroundColor: "gray",
                            borderRadius: "5px",
                            margin: "5px"


                        }
                        return ( <
                            div style = { style1 } >
                            <
                            h3 > { name } < /h3> <
                            h4 > { price } < /h4> <
                            button > Buy now < /button>

                            <
                            /div>
                        )
                    }

                    function Person(Attri) {
                        const style = {
                            border: "10px solid yellow",
                            margin: "10px"
                        }
                        return ( <
                            div style = { style } >
                            <
                            h1 > My name is: { Attri.name } { Attri.nickname } < /h1> <
                            h2 > Programming Hero.Com < /h2> <
                            /div>
                        )
                    }


                    export default App;