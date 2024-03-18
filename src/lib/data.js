import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            username: 'Peter',
            email: 'peter@example.com',
            password: bcrypt.hashSync('123456'),
        },
        {
            username: 'Jhon',
            email: 'jhon@example.com',
            password: bcrypt.hashSync('123456'),
        },
    ],
    posts: [
        {
            title: 'Origin of the earth',
            description: "Quisque gravida, elit rhoncus scelerisque rhoncus, ipsum elit porttitor arcu, eu vulputate nibh dolor sit amet justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: false,
            url: '/images/post1.jpg',
        },
        {
            title: 'Programming in Javascript',
            description: "Quisque gravida, elit rhoncus scelerisque rhoncus, ipsum elit porttitor arcu, eu vulputate nibh dolor sit amet justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: '/images/post2.jpg',
        },
        {
            title: 'Will AI makes programmers lose jobs',
            description: "Quisque gravida, elit rhoncus scelerisque rhoncus, ipsum elit porttitor arcu, eu vulputate nibh dolor sit amet justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: '/images/post3.jpg',
        },
        {
            title: 'AI future',
            description: "Quisque gravida, elit rhoncus scelerisque rhoncus, ipsum elit porttitor arcu, eu vulputate nibh dolor sit amet justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: false,
            url: '/images/post4.jpg',
        },
        {
            title: 'How to become better at coding?',
            description: "Quisque gravida, elit rhoncus scelerisque rhoncus, ipsum elit porttitor arcu, eu vulputate nibh dolor sit amet justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: '/images/post5.jpg',
        },
        {
            title: 'Discovery of new planet similar to Earth',
            description: "Quisque gravida, elit rhoncus scelerisque rhoncus, ipsum elit porttitor arcu, eu vulputate nibh dolor sit amet justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: '/images/post6.jpg',
        },

    ],
}

export default data