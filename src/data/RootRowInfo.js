/*
Type :  Small - 0
        Table - 1 : Public Alias Table
                2 : Private Alias Table
        Table - 3 : Graph
*/

const RowInfo = [
    [ {
        type: 0,
        title : "Word of the Day",
        color: "#e6934c",
        icon: "fa fa-camera-retro"
      },
      {
        type: 0,
        title : "Word of the Day",
        color: "#86ba79",
        icon: "fa fa-car"
      },
      {
        type: 0,
        title : "Word of the Day",
        color: "#ff7878",
        icon: "fa fa-eraser"},
      {
        type: 0,
        title : "Word of the Day",
        color: "#5ad1c9",
        icon: "fa fa-flask"}
    ],
    [ {
        type: 3,
        title : "Word of the Day",
        color: "#86ba79",
        icon: "fa fa-tags",
        headMainText: "Table on Plain Background",
        headSubText: "Here is a subtitle for this table",
      },
      {
        type: 3,
        title : "Word of the Day",
        color: "#e6934c",
        icon: "fa fa-history",
        headMainText: "Table on Plain Background",
        headSubText: "Here is a subtitle for this table",
      },
      {
        type: 3,
        title : "Word of the Day",
        color: "#ff7878",
        icon: "fa fa-podcast",
        headMainText: "Table on Plain Background",
        headSubText: "Here is a subtitle for this table",
      }
    ],
    [ {
        type: 1,
        title : "Word of the Day",
        color: "#a155f2",
        icon: "fa fa-rocket",
        headMainText: "Public Alias Table",
        headSubText: "Alias Table for Everyone",
      },
      {
        type: 2,
        title : "Word of the Day",
        color: "#e6934c",
        icon: "fa fa-tree",
        headMainText: "Private Alias Table",
        headSubText: "Alias Table for Individual",
      }
    ],
]

export default RowInfo;
