import React from 'react';
import Tree from "react-d3-tree";

function FactorTree() {



    // const myTreeData = [
    //     {
    //         name: "dragon",
    //         rId: 1,
    //         cId: 1,
    //         cPId: null,
    //         del: false,
    //         children: [
    //             {
    //                 name: "test",
    //                 rId: 2,
    //                 cId: 2,
    //                 cPId: 1,
    //                 del: false,
    //                 children: [
    //                     { name: "abc", rId: 4, cId: 4, cPId: 2, del: false, children: [] }
    //                 ]
    //             },
    //             {
    //                 name: "1",
    //                 rId: 3,
    //                 cId: 3,
    //                 cPId: 1,
    //                 del: false,
    //                 children: [
    //                     {
    //                         name: "1.a",
    //                         rId: 5,
    //                         cId: 5,
    //                         cPId: 3,
    //                         del: false,
    //                         children: [
    //                             {
    //                                 name: "1.1.a",
    //                                 rId: 7,
    //                                 cId: 7,
    //                                 cPId: 5,
    //                                 del: false,
    //                                 children: []
    //                             },
    //                             {
    //                                 name: "1.2.a",
    //                                 rId: 8,
    //                                 cId: 7,
    //                                 cPId: 5,
    //                                 del: false,
    //                                 children: []
    //                             },
    //                             {
    //                                 name: "1.3.a",
    //                                 rId: 9,
    //                                 cId: 7,
    //                                 cPId: 5,
    //                                 del: false,
    //                                 children: []
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         name: "2.a",
    //                         rId: 6,
    //                         cId: 6,
    //                         cPId: 3,
    //                         del: false,
    //                         children: []
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];


    const myTreeData = [

        {
            "name": "emission factors -  1970",
            "children": [
                {
                    "name": "Energy",
                    "free": "true",
                    "description": "Sectors",
                    "children": [
                        {
                            "name": "Agriculture - stationary combustion",
                            "free": "true",
                            "description": "Source",
                            "children": [
                                {
                                    "name": "Burning oil",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.0195716564137617",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                },
                                {
                                    "name": "Coal",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.024618182",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                },
                                {
                                    "name": "Coke",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.0276888395712285",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "emission factors -  1970",
            "children": [
                {
                    "name": "Energy",
                    "free": "true",
                    "description": "Sectors",
                    "children": [
                        {
                            "name": "Agriculture - stationary combustion",
                            "free": "true",
                            "description": "Source",
                            "children": [
                                {
                                    "name": "Coal",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.024618182",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "emission factors -  1970",
            "children": [
                {
                    "name": "Energy",
                    "free": "true",
                    "description": "Sectors",
                    "children": [
                        {
                            "name": "Agriculture - stationary combustion",
                            "free": "true",
                            "description": "Source",
                            "children": [
                                {
                                    "name": "Coke",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.0276888395712285",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "emission factors -  1970",
            "children": [
                {
                    "name": "Energy",
                    "free": "true",
                    "description": "Sectors",
                    "children": [
                        {
                            "name": "Agriculture - stationary combustion",
                            "free": "true",
                            "description": "Source",
                            "children": [
                                {
                                    "name": "Fuel oil",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.0213504728132388",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "emission factors -  1970",
            "children": [
                {
                    "name": "Energy",
                    "free": "true",
                    "description": "Sectors",
                    "children": [
                        {
                            "name": "Agriculture - stationary combustion",
                            "free": "true",
                            "description": "Source",
                            "children": [
                                {
                                    "name": "Vaporising oil",
                                    "free": "true",
                                    "description": "Fuel Name",
                                    "children": [
                                        {
                                            "name": "0.0201284094104415",
                                            "free": "true",
                                            "description": "Emission factor"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ]




    function test(e) {
        console.log("e", e);
    }
    return <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
        <Tree data={myTreeData} onClick={test} />
    </div>;
}

export default FactorTree;
