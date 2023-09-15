async function get_api(id_value) {
    let response1 = await fetch(`https://student-js-test-site1.000webhostapp.com/front_0523/api/all_data.php?id_stud=${id_value}`);
    if (response1.ok) {
      let resp = await response1.json();
      //console.log(resp[0].phones[0]);
      
      var api_name = document.getElementById(`api_name`);
      var api_name2 = document.getElementById(`api_name2`);
      var api_addr = document.getElementById(`api_addr`);
      var api_addr2 = document.getElementById(`api_addr2`);
      var api_email = document.getElementById(`api_email`);
      var api_email2 = document.getElementById(`api_email2`);
      var api_phone = document.getElementById(`api_phone`);
      var api_phone2 = document.getElementById(`api_phone2`);
      var api_edu = document.getElementById(`api_edu`);
      var api_deskr = document.getElementById(`deskr`);
      
      api_name2.innerHTML = api_name.innerHTML = `${resp[0].first_name} ${resp[0].last_name}`;
      api_email2.innerHTML = api_email.innerHTML = resp[0].email;
      api_email2.href = api_email.href = `mailto:${resp[0].email}`;
      api_addr2.innerHTML = api_addr.innerHTML = resp[0].address;
      api_edu.innerHTML = resp[0].education;
      api_deskr.innerHTML = resp[0].deskr;
      
      var pnone_list = ``;
      var href_phone = ``;
      for (let ind in resp[0].phones) {
        href_phone = resp[0].phones[ind].replace(/\s/g, '');
        pnone_list += `<a href="tel:${href_phone}">${resp[0].phones[ind]}</a>`;
      }
      api_phone2.innerHTML = api_phone.innerHTML = pnone_list;
      api_phone.href = `tel:${href_phone}`;

      var api_skill_list = document.getElementById("skill_list");
      console.log(skill_list);

      api_skill_list.innerHTML = ``;
      for (let ind in resp[0].skills) {

        var newSkillName = document.createElement("div");
        newSkillName.className = `skill_name`;
        newSkillName.setAttribute(`id`, `skill_name_${+ind+1}`);
        newSkillName.innerHTML = resp[0].skills[ind].name;
        api_skill_list.appendChild(newSkillName);

        var newSkillRate = document.createElement("div");
        newSkillRate.className = `skill_rate`;
        newSkillRate.setAttribute(`id`, `skill_rate_${+ind+1}`);
        newSkillRate.innerHTML = resp[0].skills[ind].rate;
        api_skill_list.appendChild(newSkillRate);
      }

      var api_cards_list = document.getElementById("cards_list");
      api_cards_list.innerHTML = ``;

      for (let ind in resp[0].services) {

        var newCard = document.createElement("div");
        newCard.className = `card`;
        newCard.setAttribute(`id`, `card_${+ind+1}`);

        var newCardImg = document.createElement("img");
        newCard.appendChild(newCardImg);

        var newCardTitle = document.createElement("div");
        newCardTitle.className = `sub_title`;
        newCardTitle.setAttribute(`id`, `card_title_${+ind+1}`);
        newCardTitle.innerHTML = resp[0].services[ind].name;
        newCard.appendChild(newCardTitle);

        var newCardText = document.createElement("div");
        newCardText.className = `most_text`;
        newCardText.setAttribute(`id`, `card_text_${+ind+1}`);
        newCardText.innerHTML = resp[0].services[ind].text;
        newCard.appendChild(newCardText);

        api_cards_list.appendChild(newCard);
      }
    }
}

async function send_mess() {
  var send_req = document.getElementById(`send_req`);
  var form_data = new FormData(send_req);
  console.log(form_data);
  let response1 = await fetch(`https://student-js-test-site1.000webhostapp.com/front_0523/api/send_message.php`, {
    method: "POST",
    body: form_data
  });
  if (response1.ok) {
    //http://lessonssite1.vlad/api/send_message.php
    //https://student-js-test-site1.000webhostapp.com/front_0523/api/send_message.php
    console.log("Успішно." + response1.statusText);
  } else {
    console.log("Помилка HTTP: " + response1.statusText);
  }
}