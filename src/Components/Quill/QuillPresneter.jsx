import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled  from 'styled-components';

const Container = styled.div`
    padding : 30px;
    height : 700px;
`;

const QuillPresneter = (props) => {
    const {value, modules, formats, onChangeValue } = props;

    return (
        <Container>
            <h1 style={{padding: '20px'}}>[#006888 YERIEL] React Quill Image Resize</h1>
            <ReactQuill 
                id="react-quill"
                value={value}
                onChange={onChangeValue}
                modules={modules}
                formats={formats}
                selection={{ start: 0, end: 0 }}
                theme="snow"
                style={{height:'100%'}}
            />
        </Container>
    );
};

export default QuillPresneter;