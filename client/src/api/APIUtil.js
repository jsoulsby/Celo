export const deleteHerd = async (herdID) => {
  let response = await fetch('/api/herds/' + herdID, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const content = await response.json();
  console.log(content)
}

export const deleteCow = async (herdID, cowID) => {
  let response = await fetch("/api/cow/" + herdID + "/" + cowID, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const content = await response.json();
  console.log(content)
}

export const addHerd = async (herdName) => {
  let response = await fetch("/api/herd/", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: herdName })
  })
  const content = await response.json();
  console.log(content)
}

export const getHerd = async (herdID) => {
  let response = await fetch("/api/herd/name/" + herdID, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export const addCow = async (cowID, herdID) => {
  let response = await fetch("/api/cowHerd/", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cow: cowID, herd: herdID })
  })
  const content = await response.json();
  console.log(content)
}