import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Space, Table } from "antd";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer/rootReducer";
import { useDispatch } from "react-redux";

interface DataType {
  masach: string;
  tensach: string;
  nhaxuatban: string;
  namxuatban: number;
}

const initialBook = {
  masach: "",
  tensach: "",
  nhaxuatban: "",
  namxuatban: 2000,
};

const data = [
  {
    masach: "00001",
    tensach: "Object Oriented Programming",
    nhaxuatban: "Kim Đồng",
    namxuatban: 2012,
  },
  {
    masach: "00002",
    tensach: "Asp.Net Programming",
    nhaxuatban: "Tuổi trẻ",
    namxuatban: 2015,
  },
  {
    masach: "00003",
    tensach: "Principle of Database Design",
    nhaxuatban: "Khoa học kỹ thuật",
    namxuatban: 2020,
  },
  {
    masach: "00004",
    tensach: "Frontend Development with React",
    nhaxuatban: "Văn Lang",
    namxuatban: 2022,
  },
];

const Books = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myBook, setMyBook] = useState(initialBook);
  const dispatch = useDispatch();
  const bookList = useSelector((state: State) => state.books);
  const [text, setText] = useState("");
  const [myFilterBook, setMyFilterBook] = useState(bookList);
  const handleChange = () => {
    setMyFilterBook(
      text == ""
        ? [...bookList]
        : bookList.filter((item) => item.tensach.includes(text))
    );
  };
  useEffect(() => {
    handleChange();
  }, [text]);
  const column = [
    {
      title: "Mã sách",
      dataIndex: "masach",
      key: "masach",
    },
    {
      title: "Tên sách",
      dataIndex: "tensach",
      key: "tensach",
    },
    {
      title: "Nhà xuất bản",
      dataIndex: "nhaxuatban",
      key: "nhaxuatban",
    },
    {
      title: "Năm xuất bản",
      dataIndex: "namxuatban",
      key: "namxuatban",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsModalVisible(true);
              setMyBook(record);
            }}
          >
            Update
          </a>{" "}
          |{" "}
          <a
            onClick={() => {
              setMyBook(record);
              dispatch({ type: "Delete", book: myBook });
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <input
        type="text"
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add Book
      </Button>
      <Table columns={column} dataSource={myFilterBook} />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          dispatch({ type: "Update", book: myBook });
          setIsModalVisible(false);
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        <table>
          <tr>
            <td>Mã sách</td>
            <td>
              <input
                disabled
                type="text"
                value={myBook.masach}
                onChange={(event) =>
                  setMyBook({ ...myBook, masach: event.currentTarget.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Tên sách</td>
            <td>
              <input
                type="text"
                value={myBook.tensach}
                onChange={(event) =>
                  setMyBook({ ...myBook, tensach: event.currentTarget.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Nhà xuất bản</td>
            <td>
              <input
                type="text"
                value={myBook.nhaxuatban}
                onChange={(event) =>
                  setMyBook({
                    ...myBook,
                    nhaxuatban: event.currentTarget.value,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Năm xuất bản</td>
            <td>
              <input
                type="number"
                value={myBook.namxuatban}
                onChange={(event) =>
                  setMyBook({
                    ...myBook,
                    namxuatban: Number(event.currentTarget.value),
                  })
                }
              />
            </td>
          </tr>
        </table>
      </Modal>
    </>
  );
};

export default Books;
