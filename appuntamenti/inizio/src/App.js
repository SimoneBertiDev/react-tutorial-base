import List from "./List";
import data from "./data";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(data);
  // console.log(people);

  const ReloadAllItem = () => {
    setPeople(data);
  };

  const RemoveItem = (id) => {
    setPeople((oldValue) => {
      return oldValue.filter((value) => value.id !== id);
    });
  };
  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi incontri</h2>
        <div className="people-list">
          <List data={people} RemoveItem={RemoveItem} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={ReloadAllItem}>
            Reload
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            Delete all
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
