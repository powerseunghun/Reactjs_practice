import React, { useRef, useCallback, useState } from 'react';
// 12.1.4 immer Apply to App Component
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // Function for input modify
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      // setForm({
      //   ...form,
      //   [name] : [value]
      // });
      // 12.1.4 immer Apply to App Component
      // setForm(
      //   produce(form,draft => {
      //     draft[name] = value;
      //   })
      // );

      // 12.1.5 use immer togetehr useState's functional update
      setForm(
        produce(draft => {
          draft[name] = value;
        })
      )
    },
    [form]
  );

  // Function for form registration
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // new content registration to array
      // setData({
      //   ...data,
      //   array: data.array.concat(info)
      // });
      // 12.1.4 Apply immer to App Component
      // setData(
      //   produce(data, draft => {
      //     draft.array.push(info);
      //   })
      // )

      // 12.1.5 use immer togetehr useState's functional update
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      )

      // form initialize
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // Function for category remove
  const onRemove = useCallback(
    id => {
      // setData({
      //   ...data,
      //   array: data.array.filter(info => info.id !== id)
      // });
      
      // 12.1.4 immer Apply to App Component
      // setData(
      //   produce(data, draft=>{
      //     draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      //   })
      // )

      // 12.1.5 use immer togetehr useState's functional update
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id ===id), 1);
        })
      )
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="ID"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">Registration</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
