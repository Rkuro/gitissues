const ResumeParser = require('resume-parser');
const fs = require('fs');
const path = require( 'path' );

const currentDir = __dirname;

const resume_dirname = 'Resumes';
const resume_dirpath = path.normalize(currentDir + '/' + resume_dirname);

fs.readdir(resume_dirpath, function (err, files) {
    if (err) {
        console.log(err);

    }
    files.forEach(function (file, index) {
        ResumeParser.parseResume('./Resumes/' + file, './files/')
            .then(file => {
                console.log("Yay! " + file)
            })
            .catch(err => {
                console.log("No!", err)
            });
        // console.log(file);
    });
});

