import styled from "styled-components";
export const Wrapper = styled.div`
  .custom--dropdown-container {
    text-align: left;
    border: 1px solid #ccc;
    position: relative;
    border-radius: 6px;
    cursor: pointer;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }

  .custom--dropdown-container .dropdown-input {
    padding: 7px 11px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    gap: 7px;
  }

  .custom--dropdown-container
    .dropdown-input
    .dropdown-selected-value.placeholder {
    color: #82868b;
  }

  .custom--dropdown-container .dropdown-tool svg {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .custom--dropdown-container .dropdown-tool svg.translate {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .custom--dropdown-container .dropdown-menu {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding: 5px;
    position: absolute;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    overflow: auto;
    background-color: #fff;
    z-index: 99;
    max-height: 312px;
    min-height: 50px;
  }

  .custom--dropdown-container .dropdown-menu::-webkit-scrollbar {
    width: 5px;
  }

  .custom--dropdown-container .dropdown-menu::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .custom--dropdown-container .dropdown-menu::-webkit-scrollbar-thumb {
    background: #888;
  }

  .custom--dropdown-container .dropdown-menu::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .custom--dropdown-container .dropdown-menu.alignment--left {
    left: 0;
  }

  .custom--dropdown-container .dropdown-menu.alignment--right {
    right: 0;
  }

  .custom--dropdown-container .dropdown-item {
    padding: 7px 10px;
    cursor: pointer;
    -webkit-transition: background-color 0.35s ease;
    transition: background-color 0.35s ease;
    border-radius: 6px;
    font-weight: 500;
  }

  .custom--dropdown-container .dropdown-item:hover {
    background-color: rgba(130, 134, 139, 0.05);
    color: #ff7300;
  }

  .custom--dropdown-container .dropdown-item.selected {
    background-color: rgba(255, 115, 0, 0.075);
    color: #ff7300;
    font-weight: 600;
  }

  .custom--dropdown-container .search-box {
    padding: 5px;
  }

  .custom--dropdown-container .search-box input {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .custom--dropdown-container .dropdown-tags {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 5px;
  }

  .custom--dropdown-container .dropdown-tag-item {
    background-color: #ff7300;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .custom--dropdown-container .dropdown-tag-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 5px;
  }
`;
