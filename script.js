
let followers = 1500;
let likes = 500;
let comments = 200;


document.getElementById('followersCount').textContent = followers;
document.getElementById('likesCount').textContent = likes;
document.getElementById('commentsCount').textContent = comments;


setInterval(updateData, 3000);


let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Followers', 'Likes', 'Comments'],
        datasets: [{
            label: 'Social Media Metrics',
            data: [followers, likes, comments],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


function updateData() {
   
    followers += getRandomNumber(10, 50);
    likes += getRandomNumber(5, 30);
    comments += getRandomNumber(3, 20);

   
    document.getElementById('followersCount').textContent = followers;
    document.getElementById('likesCount').textContent = likes;
    document.getElementById('commentsCount').textContent = comments;

  
    myChart.data.datasets[0].data = [followers, likes, comments];
    myChart.update();
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
