import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { VscClearAll } from "react-icons/vsc";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const Header = () => {
  const [inputText, setInputText] = useState('');
  const [textList, setTextList] = useState([]);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onClickAdd = () => {
    if (inputText.trim() !== '') {
      setTextList([...textList, { text: inputText, checked: false }]);
      setInputText('');
    }
  };

  const onClickDelete = (index) => {
    const updatedTextList = [...textList];
    updatedTextList.splice(index, 1);
    setTextList(updatedTextList);
  };

  const onClickCheckbox = (index) => {
    const updatedTextList = [...textList];
    updatedTextList[index].checked = !updatedTextList[index].checked;
    setTextList(updatedTextList);
  };

  const onClickClearAll = () => {
    setTextList([]);
  };

  const onClickAllDone = () =>  {
    const updatedTextList = [...textList];
    updatedTextList.forEach((item) => (item.checked = true));
    setTextList(updatedTextList);
  }
  return (
    <div>
      <center>
        <div className='header'>
          <span className='txt'>
            <h1>To-Do List</h1>
          </span>
          <div>
            <form>
              <input
                className='input-txt'
                type='text'
                placeholder='Enter Your Task'
                name='inputText'
                value={inputText}
                onChange={onChangeInput}
                required
              />
              <button onClick={onClickAdd} className='button-add'>
                Add
              </button>
            </form>
            <div>
              {textList.map((item, index) => (
                <h3 key={index} className={`tdl-list ${item.checked ? 'checked' : ''}`}>
                  <input
                    className='check-box'
                    checked={item.checked}
                    onChange={() => onClickCheckbox(index)}
                    type='checkbox'
                  />
                  {item.text}
                  <button
                    className='delete-icon'
                    onClick={() => onClickDelete(index)}>
                    <MdDelete />
                  </button>
                  <button className='edit-icon' >

                  </button>
                </h3>
              ))}
              {textList.length > 1 &&(
                <button type='button' className='all-done-button' onClick={onClickAllDone}><IoCheckmarkDone /></button>
              )}
                

              {textList.length > 1 && (
                <button className='clear-all-button' onClick={onClickClearAll} title='Clear All Tasks'> <VscClearAll />
                </button>
                
              )}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Header;
