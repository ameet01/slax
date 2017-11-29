export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
);
