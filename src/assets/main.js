$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/salehsuboh.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var thisBadge = $('#badges');

    courses.forEach(function(course) {
      //console.log(course.title);

      var Onecourse = $('<div />', {
        'class': 'course'
      }).appendTo(thisBadge);

      $('<h3 />', {
        text: course.title
      }).appendTo(Onecourse);

      $('<img />', {
        src: course.badge
      }).appendTo(Onecourse);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo(Onecourse);
    });
  }

});
