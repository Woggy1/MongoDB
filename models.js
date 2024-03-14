const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Сутність "Учень"
const studentSchema = new Schema({
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    class: { type: Number, ref: 'Class' } // Зв'язок з сутністю "Клас"
});

// Сутність "Клас"
const classSchema = new Schema({
    id: { type: Number, required: true },
    number: { type: Number, required: true },
    teacher: { type: String, required: true }
});

// Сутність "Предмет"
const subjectSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String }
});

// Сутність "Оцінка"
const gradeSchema = new Schema({
    id: { type: Number, required: true },
    subject: { type: Number, ref: 'Subject' }, // Зв'язок з сутністю "Предмет"
    grade: { type: Number, required: true },
    student: { type: Number, ref: 'Student' } // Зв'язок з сутністю "Учень"
});

// Моделі сутностей
const Student = mongoose.model('Student', studentSchema);
const Class = mongoose.model('Class', classSchema);
const Subject = mongoose.model('Subject', subjectSchema);
const Grade = mongoose.model('Grade', gradeSchema);

module.exports = { Student, Class, Subject, Grade };
