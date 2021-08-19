import React, { useState } from 'react';
import QuillPresneter from './QuillPresneter';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from '@looop/quill-image-resize-module-react';

Quill.register('modules/ImageResize', ImageResize);
const QuillContainer = () => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ header: [1, 2, 3, false] }],
              [{ color: [] }, { background: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
              ['link', 'image'],
              ['clean'],
            ],
          },
        ImageResize: { modules: ['Resize'] },
    };
    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'size',
        'color',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'align',
    ];
    const onChangeValue = (e) => {
        setValue(e);
        console.log(e)
    }

    return (
        <QuillPresneter value={value} modules={modules} formats={formats} onChangeValue={onChangeValue}/>
    );
};

export default QuillContainer;
