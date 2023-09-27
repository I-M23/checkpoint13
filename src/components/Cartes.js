import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CartesExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAvQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBQECBAYAB//EAEEQAAEDAgQEAwQHAwwDAAAAAAEAAgMEEQUSIWETMUFRBhRxIjKBkSNSobHR4fBCksEVM0NEU2JjcoKy4vEHJDT/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAgEQEBAAIDAAIDAQAAAAAAAAAAAQIRAxIhEzEEMkEi/9oADAMBAAIRAxEAPwD5PlXrI+QqCwrtSBUhXLVXKjtlV4KxGiiyIJupCqpCLLKVCkArA8pUgKwasCll6yLkXsiDBZV4NRhGrNj1t1QYEMVgwnotTYkVsJ7IbYvMeyjhbJmKe/Re8seyXbbKjGqmPZNTTHsqGmPZDY7KjHso4aZmmPZUNOjsdr8JQYVvbFforcDZMn2K3Qobok2dTnsgup9ljTIsLFGRMDTnsq8A9kdm2wcNeDFu4B7KOBsttmMNVwxaRAVcQnsiVmDERsa0NhPZHjpyeiwbYxGmWBYT/KeLUtE4lrJX2e4cw0Ak/YF9awvwzg1bg8NM6hiIMbS17W2fcjmHc7rnsOwCXAPF1LE454pMxhlt74yn7VG8suzWa0WeLvBEeEU8NZh3Fkp3kNkY/UsceRvbkTcevqm8mB0tJ4Ulo3RMMvCMj35RcyAXvf4W9F9Dr6SKooHRSNDmZi23xu1cy+IVVSykcLsfcPG1tfsULyXSvX0k8GeDqSSFlTikAlMozNjdya3v6lczi+EMo8VqqeEHhMf7NzyHMD7V9jZGIIJHWtZoaB2v+S4hmGOxXFKmofpCZTr9ay3e72nnj5JHFNotirii05L6bX0VPTYLNE2JjQ5nsi3LsfW/3LlvKD6q3yEyx61zZotkN1FsunNIOyE6k2W+QrmHUWyGaPZdM+k2QXUmvJb5A2RRxI7YEWKO62Rw36LotS2XGnVHU2ydCDZQabZDsaUi8rryVfK7J75bZSKTZbspMiE0myjymy6Hyl+i95K/RHsO3O+U2XhTHsui8jsvCgu4A2AJAuUewWheFcApsWrJI6qZ8bWNzBrLXd+QT6s8BvgzPoqniN5hkjbH94fgE1oPCsMBjnpauRk7NQ4gZT+S6ehe7+anADx16FRyzu/Krjhuewn8GSSCm8hUNdHU0mmV3Mt/Z/D5J5jdI2pp4qkD6SmlEzbdCDqPiLhVqqEiVlVTWEzOW46hboZmTxEgacnsPNpSWqSamni3NDIzuwOafTRc5hkObGqlzuUcZH7x/C66Gm+jYInG5jvH6tPI/wAEnpy1lZiDu5YL/Aqd+zC4hIXRthjJDn3e4joOiBTQRU0IGUBjNLdz2UGUAPnecuc316N6LFPPLVaRgtjHInT/ALR2AOJTeZkyA3F7uO6yGDZb46Zo5kko7IG/VAU9Wp3C5e0kfDZDMSc1lOffjidlA1IboljrXS268RznWsroUF0IutrkMhbsna5eBi3xMWSBMIei7bU4K2IK/BCvGEUBJszPwR2VhDqtAaFYAIbNAWwDsiCnHZHYAjxtBW7HY/LbKDSgjl9iZtjB6IsUYY9r8oNjexQuQ6VwqWvgAa2nmmi/usJI/guihk4sQ41PMzd0ZFlNDVxSADOMw6HQpk1wy6JdujGan2yx1OUZczXt9bOVXGN0nEidw5O55HY90SoaHc2g/BZjGAOdtuSOzsmJYtFSPBJyyWsW30I/WqTNreM6bhva4yODngHkOVkuxSEPxSojlcSQ4ZdP2bJPTtqaescyocCC72HN1BHT0/JeJz/l805LMMta/js4+HC47rqo5vNOzPIPZg5BaQBze4N9SsLWNM7gMwFgcuew5dlsjZE3+rs9SLr1OHO8nHjnr7cmU63QjJIb2DwTstMZjGpcB+t1RkmX3WBo/wAqIHB/vfaFUAa7Eo4oXRQkOe4WuNQ34/gudc9MsYfRRw5YcnmLj3Og63SMyKOf24+W+tBeqFyCXqMyVIihcmEJSuApjAV30hhEdEUFZ4zojNU6aCXXg5DcVQuQFrY9aYXJY2TVaoZFrDym0ZujBYYZFpEgtzSHizo3SODGNzOPQLbS4S8WdPVStH9nE4qlFUwwtcXyNY7uVrixKnkcRCHS294gWbf1K0WxxjVHTBoyRggbuLj8yrlrI23OpOmnVDdK5sXFqCGMGojb19Sh53uLOk8vuA/0be/yTqFWMYU2ueZw8xSxDKHt1F+drdbJP/IdWJWmpljsCPdBJXXgNdNHCwew03+A1VaqEOiNtCbWPZc+f43Fnl2ynquPJljNSk8VOGNAGtu/4ogjcPc9rY80QONw5osSNB94VyA5uce736tO6tJJNRNgfRQzH2HyRP8A8N5H2clgq8LrY2uLJX1DexOvy6pnVOmiaXcPjNaLlo963cd0vj8VYZFVNppqh8UjhdrZI3ajYi6FkSzxwv2SueQSCLEcx2VM63+JcRo6uWI0rfbbcSSWtfsEj4wUrPXJljJWwvUGRYzNuo4yGgYYCmMCVQFMoHcl31tGMZRwVkjcj5lKil5QXPspe9ZpH7owBRItEU1jzSsyq7JrdU2mlPoptEcTi3NJIqjdG8xup5Q+zN0we4NvzNk6iqqLDqdrpZGBwHsi/wCrlcfJPusr5QXDMdCdTzNkujY8vV3FFVOxLNiFWMtFEfoo3f0rh1d/dFuXdbKOV0kUlZJ78xysv0H6/guUxPxDDLDDQYYwsZ7MbXOFrchoF0r3iKn55Y4WWueQPMn4IujDKWVrw+QGqqXf2cQaP9R/4rbUN+hPfh5lznhWq83SV1WNGy1YjZf6rQLf7iU5r61kGJ0NK91jUMlbb0DfzWN2mtl1aRE6/Jj3eyexOo+aiKYt+kZYg6Oae6rjrM+A1RdoWMab7tfb8EowjFGzjJL/ADg0I+uFm7SZaOYqmKcHgOOaM+1EfeafRcb/AOSMLa2giximGV0M7eKAPraX+dky8TRmldBWxPc1zjkLmGxJ5g/K/wAlyniLFayswqeCeoc+O2bKbakcr90LNxLkyn62LS1GdrH399gdz7hBM+6xum/9KjcesVvkSgGo3WmHjmkMjOhmo3S51Ruhmo3R6Doxhet8MiTRyLZFLuumwDqOVGEu6VRzbo7Zrjmp2M1vkWWWRUfKgSPutC1L5VUTLO96GZE8YxZPbqiio3SoSFEbIUuUHZg6e6C+bdZuIqOel0Wj+YdG9sjT7TSCPgmeL+J6jEKYU7Y2wRHV4a7MX9eduV+iQPcgOkTTE2OVnkfRvAeIU4wiSCaaOPgVXEdncBZhZz+YKS414kNZ4ibiFKTwqdwbBm0zNBuSe17lce6TUX1VmzHuh09U+S3GR9MxzxDQ1GASinna6WpIAi/abq0uv25H5rjTVW1abEG4KUtmPdeM26HQMsrldm1Zi9VVRMiqJ3PjYbtabaFJ6+XPTyt7tKG+bdZKia4Iv0W6NN2+tNTIW4bh5J5tePkR+KxGfdFxJ+XC8MHdsn3tSsyJsJ/k+M8bDPuhmbVZTJuqmRU6m0etdZHjlt1WUc1dqKOjGOVaGS6JdHyWlnJJQai9Dc5QFBSlobyhlXeho7BKsCqqQlor3VHOUqhWgKPcgPcryLO9UxhogvUZ0MqCn0aDCRedKghVcho2kvlWeV91L1neho0jfixthuGbCX72pSXJtjn/AMGG+kn3hJkOP9YbH6WzKLqF5UM//9k=" />
        <Card.Body>
          <Card.Title>Card N°1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
          <Card.Title>Card N°2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
          <Card.Title>Card N°3</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CartesExample;