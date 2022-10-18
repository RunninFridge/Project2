// const input = document.getElementById('search-btn');
// const searchBox = new google.maps.charging+station.SearchBox(input);


$('.search-btn').on('click', async function(event){
    event.preventDefault();
    const zip_code = $('#search').val();
    console.log(zip_code);
    if (zip_code) {
      document.location.replace(`/api/surveys/dashboard/${zip_code}`)
    } else alert("Please enter a zip code")
//     $.getJSON(`https://www.google.com/maps/embed/v1/place?key=${api_key1}
//     &q=EV+charging+station+${zip_code}`

        // const response = await fetch(`/api/surveys/dashboard`, {
        //   method: 'POST',
        //   body: JSON.stringify({ zip_code }),
        //   headers: { 'Content-Type': 'application/json' },
        // });
    
        // if (response.ok) {
        //   //document.location.replace('/');
        // } else {
        //   alert('No zipcode input');
        // }
});