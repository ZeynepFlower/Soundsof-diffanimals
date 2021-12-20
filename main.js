function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('lion') 
    img1 = document.getElementById('monkey')
    img2 = document.getElementById('cat')
    img3 = document.getElementById('dog')

    if (results[0].label == "Lion") {
      img.src = 'https://www.pngfind.com/pngs/m/11-117600_lion-png-transparent-png.png';
      img1.src = 'https://cdn.imgbin.com/18/4/17/imgbin-monkey-apes-and-monkeys-eating-fruit-FVrv3F7fYNT6xqBnw3HmAgCXp.jpg';
      img2.src = 'https://e7.pngegg.com/pngimages/629/341/png-clipart-brown-tabby-cat-sitting-on-brown-post-cat-acrobat-animals-cats.png';
      img3.src = 'https://i.pinimg.com/474x/be/54/bd/be54bd5e8e9c23e3ce570ff2acae592d.jpg';
    } else if (results[0].label == "Monkey") {
      img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
      img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.gif';
      img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
      img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
    } else if (results[0].label == "Cat") {
      img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
      img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
      img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.gif';
      img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
    }
    else{
      img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
      img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
      img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
      img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.gif';
    }
  }
}
