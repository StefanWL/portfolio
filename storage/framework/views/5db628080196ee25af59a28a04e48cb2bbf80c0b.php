<?php $__env->startSection('content'); ?>

<section class="w3-padding">

    <h2>Manage Types</h2>

    <table class="w3-table w3-stripped w3-bordered w3-margin-bottom">
        <tr class="w3-red">
            <th>Name</th>
            <th></th>
            <th></th>
        </tr>
        <?php foreach($types as $type): ?>
            <tr>
                <td><?php echo e($type->title); ?></td>
                <td><a href="/console/types/edit/<?php echo e($type->id); ?>">Edit</a></td>
                <td><a href="/console/types/delete/<?php echo e($type->id); ?>">Delete</a></td>
            </tr>
        <?php endforeach; ?>
    </table>

    <a href="/console/types/add" class="w3-button w3-green">New Type</a>

</section>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.console', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/stefanwhittakerlee/Documents/Web_Development_Work/PHP/PortfolioFinal/portfolio/resources/views/types/list.blade.php ENDPATH**/ ?>