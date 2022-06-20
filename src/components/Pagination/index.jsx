import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { connect } from "react-redux";
import { getPagination as handleOnChangePagination } from "../../bootstrap/bootstrapActions";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

// const tabStyles = (tab) => ({
//   padding: 0,
//   minWidth: "36px",
//   height: "36px",
//   lineHeight: "36px",
//   textAlign: "center",
//   marginRight: 8,
//   backgroundColor: tab.selected ? "#481e5b" : "#fff",
//   boxShadow: tab.selected && "0px 5.008px 12.8px rgba(7,9,25,0.5)",
//   borderStyle: tab.selected ? "none" : "solid",
//   borderRadius: ".2rem",
//   borderColor: "#d1d2db",
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "center",
//   borderWidth: 1,
// });

const Tab = ({ tabs, handleChangePage }) => {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {tabs.map((tab, i) => {
        let styles = {
          padding: 0,
          minWidth: "36px",
          height: "36px",
          lineHeight: "36px",
          textAlign: "center",
          marginRight: 8,
          backgroundColor: tab.selected ? "#481e5b" : "#fff",
          boxShadow: tab.selected && "0px 5.008px 12.8px rgba(7,9,25,0.5)",
          borderStyle: tab.selected ? "none" : "solid",
          borderRadius: ".2rem",
          borderColor: "#d1d2db",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          borderWidth: 1,
        };
        return (
          <div
            key={"tabPagination" + i}
            style={styles}
            onClick={() => handleChangePage(tab.value)}
          >
            <label style={{ color: tab.selected ? "#fff" : "#000" }}>
              {tab.display}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const Paging = (props) => {
  const {
    optionsSelect,
    optionsValue,
    onSelect,
    totalRecords,
    pagination,
    handleChangePagination,
  } = props;
  const [tabs, setTabs] = useState([]);

  const handleDropDown = async (value) => {
    let selectedValue = Number(value[0][optionsSelect.valueField]);
    await handleChangePagination({
      ...pagination,
      limit: selectedValue,
      page: 1,
    });
    onSelect({ limit: selectedValue, page: 1 });
  };

  const handleChangePage = async (value) => {
    await handleChangePagination({ ...pagination, page: Number(value) });
    onSelect({ ...pagination, page: Number(value) });
  };
  const createTab = (page = 1, limit = 2) => {
    let newPage = page;
    let totalPage = Math.ceil(Number(totalRecords) / Number(limit));
    let _tabs = [];
    let start = 1;
    if (Number(newPage) >= 3) {
      if (Number(newPage) >= Number(totalPage) - 2) {
        start = totalPage - 4;
        if (start <= 0) start = 1;
      } else {
        start = Number(newPage) - 2;
      }
    }
    let end = start + 4 < totalPage ? start + 4 : totalPage;
    for (let i = start; i <= end; i++) {
      let selected = false;
      if (Number(newPage) === i) selected = true;
      _tabs.push({
        value: `${i}`,
        display: `${i}`,
        selected,
      });
    }

    if (Number(newPage) > 1) {
      _tabs = [
        { value: 1, display: <KeyboardDoubleArrowLeftIcon />, selected: false },
        {
          value: Number(newPage) - 1,
          display: <ChevronLeftIcon />,
          selected: false,
        },
        ..._tabs,
      ];
    }

    if (Number(newPage) < totalPage) {
      _tabs = [
        ..._tabs,
        {
          value: Number(newPage) + 1,
          display: <ChevronRightIcon />,
          selected: false,
        },
        {
          value: totalPage,
          display: <KeyboardDoubleArrowRightIcon />,
          selected: false,
        },
      ];
    }

    setTabs(_tabs);
  };

  useEffect(() => {
    createTab(pagination.page, pagination.limit);
  }, [onSelect]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Tab tabs={tabs} handleChangePage={handleChangePage} />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <label style={{ marginRight: 5, marginBottom: 0 }}>show</label>
        <Select
          options={optionsValue}
          onChange={handleDropDown}
          {...optionsSelect}
          style={{ borderRadius: "3px", zIndex: 0 }}
        />
        <label style={{ marginLeft: 5, marginBottom: 0 }}>
          {" "}
          - {totalRecords} Results{" "}
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // * Find State
  pagination: state.bootstrap.pagination,
});

const mapDispatchToProps = {
  // * Find Actions
  handleChangePagination: (payload) => handleOnChangePagination(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Paging);
