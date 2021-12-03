import data from '../data.json';

function Resume() {
  return (
    <>
      {data['experience'].map((item) => {
        return (
          <div>
            <p>{item.company}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.time.join(' - ')}</p>
            <p>{item.img}</p>
          </div>
        );
      })}
    </>
  );
}

export default Resume;
