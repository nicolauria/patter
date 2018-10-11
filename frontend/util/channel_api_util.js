export const fetchChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);

export const fetchChannel = id => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${id}`
  })
);

export const createChannel = channel => (
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel }
  })
);

export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: { channel }
  })
);

export const removeChannel = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/channels/${id}`
  })
);