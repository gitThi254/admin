import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteColor, getColors } from "../features/color/colorSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../components/CustomModal";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ColorList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [colorId, setcolorId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setcolorId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getColors());
  }, []);

  const getColorState = useSelector((state) => state.colors);
  const { colors } = getColorState;
  const data1 = [];
  for (let i = 0; i < colors.length; i++) {
    data1.push({
      key: i + 1,
      title: colors[i].title,
      action: (
        <>
          <Link
            to={`/admin/color/${colors[i]._id}`}
            className="fs-3 text-warning"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(colors[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const delColor = (e) => {
    setOpen(false);
    dispatch(deleteColor(e));
    setTimeout(() => {
      dispatch(getColors());
    }, 100);
  };
  return (
    <div>
      <h3 className="title">color list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => delColor(colorId)}
        title="Are you sure you want to delete this color"
      />
    </div>
  );
};

export default ColorList;
