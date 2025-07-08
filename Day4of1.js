var a;
    var b;
    
    function showsidebar(){
        a=document.getElementById('hhdiv');
        if(a.classList.contains('hdiv1')){
            a.classList.remove('hdiv1');
            a.classList.add('hdiv2');        
}
    else{
            a.classList.remove('hdiv2');
            a.classList.add('hdiv1'); 
    }


    }

//---------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById('empform').addEventListener('submit', function(e) {
  e.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  const gender = document.querySelector('input[name="gender"]:checked')?.value || "";

  const state = document.getElementById('state').value;

  const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked'))
                       .map(cb => cb.value)
                       .join(', ');

          

  const address = document.getElementById('address').value;

  if(name==''){
    alert("Please enter name");
    return false;
  }
  if (phone.length != 10 || isNaN(phone)) {
    alert("Pleae enter a correct phone number");
    return false;
  
  }
  
  if(email==''){
    alert("Please Enter Correct Email");
    return false;
  }
  if (age.length != 2 || isNaN(age)) {
    alert("Pleae enter a correct Age");
    return false;
  
  }
  if(address==''){
    alert("Please enter Address");
    return false;
  }
  const tableBody = document.getElementById('emptable').getElementsByTagName('tbody')[0];
  const newRow = tableBody.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${state}</td>
    <td>${hobbies}</td>
    <td>${address}</td>
  `;

  document.getElementById('name').value="";
  document.getElementById('number').value="";
  document.getElementById('email').value="";
  document.getElementById('age').value="";
  document.getElementById('address').value="";
  document.getElementById('state').value="";
  document.getElementById('male').checked=false;
  document.getElementById('female').checked=false;
  document.getElementById('reading').checked=false;
  document.getElementById('traveling').checked=false;
  //document.getElementById('empform').reset();
});
