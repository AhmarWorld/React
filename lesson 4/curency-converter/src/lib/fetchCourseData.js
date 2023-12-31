export const fetchCourseData = async () => {
    try {
      const res = await fetch(
        `http://data.fixer.io/api/latest?access_key=0d6b18af90ca1e62d22238017c294f79`
      );
      if (res.status === 200) {
        return res.json();
      }
      throw new Error(`Status code: ${res.status}. Data fethed unsuccessfully`);
    } catch (e) {
      console.log(e);
      throw new Error("Data fethed unsuccessfully");
    }
  };