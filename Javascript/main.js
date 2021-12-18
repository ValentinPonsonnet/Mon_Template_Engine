function my_template_engine()
{
    let template = `
    <h2></h2>
    <p></p>
    <p></p>
    <p></p>
    `
    let element = document.querySelector('#template');
    element.innerHTML= template;
}
my_template_engine()