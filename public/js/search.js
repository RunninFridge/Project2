//search the map based on zip code input
$('.search-btn').on('click', async function(event){
    event.preventDefault();
    const zip_code = $('#search').val();
    console.log(zip_code);
    if (zip_code) {
      document.location.replace(`/api/surveys/dashboard/${zip_code}`)
    } else alert("Please enter a zip code")
});