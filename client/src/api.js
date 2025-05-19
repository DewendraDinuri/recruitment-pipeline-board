const BASE_URL = `${process.env.REACT_APP_API_URL}/api/candidates`;

export const getCandidates = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const getCandidateCount = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.length;
};

export const getJobCount = async () => {
  // Replace with real API when ready
  return 8;
};

export const getCandidatesByStage = async (stage) => {
  const res = await fetch(`${BASE_URL}?stage=${stage}`);
  return await res.json();
};

export const createCandidate = async (candidate) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(candidate)
  });
  return await res.json();
};

export const updateCandidate = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const deleteCandidate = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
