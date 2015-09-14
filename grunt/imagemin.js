module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['pic/*.{png,jpg,gif}', 'ico/*.{png,jpg,gif}'],
      dest: 'dist/'
    }]
  }
};