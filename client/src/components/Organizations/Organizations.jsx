import React from 'react'

const Organizations = () => {
    const organizations = [
        {
          name: 'Water4',
          url:'https://www.water4.org',
        },
        {
          name: 'Our Last Straw',
          url:'https://www.ourlaststraw.org/',
        },
        {
          name:'Ocean Conservancy',
          url: 'https://oceanconservancy.org/'
        },
        {
          name: 'Oceana',
          url: 'https://oceana.org/'
        }
    ]
  return (
    <footer id="how_you_can_help">
    <div className="organizations">
      {organizations.map((org, idx) => (
        <div className="org_list" key={idx}>
          <a style={{ textDecoration: 'none', color: '#13a89e', fontWeight: 'bold' }} href={org.url} target="_blank" rel="noopener noreferrer">{org.name}</a>
        </div>
      ))}
    </div>
</footer>
  )
}

export default Organizations