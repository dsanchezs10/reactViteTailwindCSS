import { useEffect, useState } from "react";
import { getAllStudents } from "../api/students.api";
import { StudentCard } from "./StudentCard";

export function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const res = await getAllStudents();
      setStudents(res.data);
    }
    loadStudents();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}