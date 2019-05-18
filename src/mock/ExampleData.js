
export const GraphItemData = {
  data:{
    "nodes": [
      { "id": "百度", "group": 1 },
      { "id": "谷歌", "group": 2 },
      { "id": "腾讯", "group": 3 },
      { "id": "亚马逊", "group": 4 },
      { "id": "阿里巴巴", "group": 5 },
      { "id": "Facebook", "group": 6 },
      { "id": "苹果", "group": 7 },
    ],
    "links": [
      { "source": "谷歌", "target": "阿里巴巴", "value": 1 },
      { "source": "百度", "target": "腾讯", "value": 1 },
      { "source": "阿里巴巴", "target": "腾讯", "value": 1 },
      { "source": "亚马逊", "target": "阿里巴巴", "value": 1 },
      { "source": "苹果", "target": "腾讯", "value": 1 },
      { "source": "Facebook", "target": "腾讯", "value": 1 },
    ]
  }
};

export const BarItemData = {
  data: [{
    year: '1951 年',
    sales: 38
  }, {
    year: '1952 年',
    sales: 52
  }, {
    year: '1956 年',
    sales: 61
  }, {
    year: '1957 年',
    sales: 145
  }, {
    year: '1958 年',
    sales: 48
  }, {
    year: '1959 年',
    sales: 38
  }, {
    year: '1960 年',
    sales: 38
  }, {
    year: '1962 年',
    sales: 38
  }],
  plotCfg: {
    margin: [80, 80, 50, 80],
  },
};

export const ImageItemData = {
  src: '/static/img/default.jpg'
};

export const LineItemData = {
  data: [
    {
      "time": "9/1",
      "price": 10,
      "name": "商品A"
    },
    {
      "time": "9/1",
      "price": 30,
      "name": "商品B"
    },
    {
      "time": "9/2",
      "price": 12,
      "name": "商品A"
    },
    {
      "time": "9/2",
      "price": 32,
      "name": "商品B"
    },
    {
      "time": "9/3",
      "price": 11,
      "name": "商品A"
    },
    {
      "time": "9/3",
      "price": 35,
      "name": "商品B"
    },
    {
      "time": "9/4",
      "price": 15,
      "name": "商品A"
    },
    {
      "time": "9/4",
      "price": 40,
      "name": "商品B"
    }
  ],
  plotCfg: {
    margin: [10, 80, 5, 70],
  },
};

export const PieItemData={
  data: [{
    "name": 14513,
    "carat": 1.35,
    "cut": "Ideal",
    "color": "J",
    "clarity": "VS2",
    "depth": 61.4,
    "table": 57,
    "price": 5862,
    "x": 7.1,
    "y": 7.13,
    "z": 4.37
  }, {
    "name": 28685,
    "carat": 0.3,
    "cut": "Good",
    "color": "G",
    "clarity": "VVS1",
    "depth": 64,
    "table": 57,
    "price": 678,
    "x": 4.23,
    "y": 4.27,
    "z": 2.72
  }, {
    "name": 50368,
    "carat": 0.75,
    "cut": "Ideal",
    "color": "F",
    "clarity": "SI2",
    "depth": 59.2,
    "table": 60,
    "price": 2248,
    "x": 5.87,
    "y": 5.92,
    "z": 3.49
  }, {
    "name": 7721,
    "carat": 0.26,
    "cut": "Ideal",
    "color": "F",
    "clarity": "VS1",
    "depth": 60.9,
    "table": 57,
    "price": 580,
    "x": 4.13,
    "y": 4.11,
    "z": 2.51
  }, {
    "name": 31082,
    "carat": 0.33,
    "cut": "Premium",
    "color": "H",
    "clarity": "VVS1",
    "depth": 61.4,
    "table": 59,
    "price": 752,
    "x": 4.42,
    "y": 4.44,
    "z": 2.72
  }, {
    "name": 26429,
    "carat": 1.52,
    "cut": "Ideal",
    "color": "G",
    "clarity": "VVS1",
    "depth": 62.4,
    "table": 55,
    "price": 15959,
    "x": 7.3,
    "y": 7.39,
    "z": 4.58
  }],
  plotCfg: {
    margin: [10, 80, 5, 70],
  },
};

export const TableItemData={
  columns:[
    {
      title: 'Name',
      dataIndex: 'name',
      className:"Table-Row-Color",
    },
    {
      title: 'Age',
      dataIndex: 'age',
      className:"Table-Row-Color",
    },
    {
      title: 'Address',
      dataIndex: 'address',
      className:"Table-Row-Color",
    },
  ],
  data: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '哒哒哒',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: '滴滴滴',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'HI',
    },
  ]
};

export function GetMockData(componentType){
  switch(componentType){
    case "table":
      return TableItemData;
    case "pie":
      return PieItemData;
    case "line":
      return LineItemData;
    case "graph":
      return GraphItemData;
    case "bar":
      return BarItemData;
    case "image":
      return ImageItemData;
    default:
      return {};
    
  }
}
